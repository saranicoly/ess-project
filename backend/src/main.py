import src.users as users
import src.evaluate as evaluate
from fastapi import FastAPI, File, HTTPException, UploadFile
import src.firebase_config as firebase_config
import src.accommodations as accommodations
from fastapi import FastAPI

app = FastAPI()
storage = firebase_config.firebase.storage()

@app.get("/")
def read_root():
    return "Server running!!"

@app.post("/users/create")
def create_user(
        email: str,
        password:str,
        username: str,
        name: str = None,
        cpf: str = None
    ):
    return users.create_user(
        email, password, name, username, cpf
    )

@app.post("/users/login")
def login_user(
        email: str,
        password:str
    ):
    return users.login_user(email, password)


@app.post("/accommodation/create")
def create_accommodation(
        accommodation_name: str,
        accommodation_loc: str, 
        accommodation_bedrooms: int,
        accommodation_max_capacity: int, 
        accommodation_description: str,
        user_id: str
        ):
        
        return accommodations.create_accommodation(accommodation_name, accommodation_loc, 
                         accommodation_bedrooms, accommodation_max_capacity, 
                         accommodation_description, user_id)

@app.post("/accommodation/create/upload_img")
async def upload(accommodation_id: str, file: UploadFile = File(...)):
    try:
        
        with open(file.filename, "wb") as buffer:
            buffer.write(await file.read())

        # Upload the file to Firebase Storage
        storage.child("accommodation").child(accommodation_id).put(file.filename)
        
        return "Imagem adicionada com sucesso"
        
    except Exception as e:
        raise HTTPException(status_code=500, detail="Erro interno do servidor")
   
@app.post("/reservations/{reservation_id}/evaluate")
def rating_post(
        reservation_id:str,
        accommodation_id:str,
        stars:int,       
        comment:str = "",
        
    ):
    return evaluate.add_rating(reservation_id, stars, comment, accommodation_id) 