from fastapi import HTTPException
from src.db import firebase_config
from datetime import datetime
from src.service.validation import Validation

storage = firebase_config.firebase.storage()
## ------------- avlidar se checkin < checkout 

def historyc(user_id, checkin, checkout):
    ## validar se user existe

    print("FORMATO",checkin, checkout);

    result = Validation.range_date_validation(checkin, checkout)

    check_in_date = result[1]
    check_out_date = result[2]

    data_atual = datetime.now().date()

    range = data_atual > check_in_date and check_out_date > check_in_date #histórico tem que ser de data antiga

    exist_user = Validation.get_user_by_id(user_id)
 
    if exist_user and range:
       
            reservation = firebase_config.db.child("reservation").get().val()
            data_atual = datetime.now().date()  
            result = []

            for _, info in reservation.items():

                usuario = info.get('client_id')
                date_in = info.get('checkin_date')
                date_out = info.get('checkout_date')

                if usuario and date_in and date_out:

                    a =datetime.strptime(date_in, "%Y-%m-%d").date()
                    b = datetime.strptime(checkin, "%Y-%m-%d").date()
                
                    c = datetime.strptime(date_out, "%Y-%m-%d").date()
                    d = datetime.strptime(checkout, "%Y-%m-%d").date()
                    
                
                    if usuario == user_id and c< data_atual :

                        if c <= d and a >= b:
                            image_url = storage.child("accommodation").child("71176949-333b-452a-86a8-d79eeda1abd5").get_url(None)
                            description = firebase_config.db.child("accommodation").child(info.get('accommodation_id')).get().val()
                            
                            info['imageUrl'] = image_url
                            info['description'] = description['description']
                            result.append(info)
    
    if not exist_user and range:
         raise HTTPException(status_code= 404)
    
    if not result:
        raise HTTPException(status_code=404)  
    else:
        raise HTTPException(status_code=200, detail = result)
   