import users as users
import evaluate as evaluate

from fastapi import FastAPI

app = FastAPI()


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

@app.post("/reservations/{reservation_id}/evaluate")
def rating_post(
        reservation_id:str,
        accommodation_id:str,
        stars:int,       
        comment:str = "",
        
    ):
    return evaluate.add_rating(reservation_id, stars, comment, accommodation_id)
