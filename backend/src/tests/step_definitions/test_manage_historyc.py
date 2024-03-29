from pytest_bdd import parsers, given, when, then, scenario
from fastapi import HTTPException
from src.service.validation import Validation

##__________________histórico de usuário_________________

@scenario(scenario_name ="Histórico de user com reservas", feature_name = "../feature/manage_historic.feature")
def test_historic_by_user_sucess():
    pass

@given(parsers.cfparse('existe um usuário de user name "{user}" cadastrado no banco de dados'))
def mock_accommodation_service_response(user: str):

    result = Validation.get_user_by_id(user)
    assert result 
    

@when(parsers.cfparse('é enviado uma requisição GET para "{url_requisition}" entre os dias "{day_in}" e "{day_out}"'),
    target_fixture="context"
)   
def get_historic_error(client, context, url_requisition: str, day_in: str, day_out: str):
    
    response = client.get(url_requisition, params={"checkin": day_in, "checkout": day_out})
    context["response"] = response
    return context

@then(parsers.cfparse('o status do código deve ser "{status_code}"'), target_fixture="context") 
def check_historic_status_code(context, status_code: str): 
    assert context["response"].status_code == int(status_code) 
    return context

@then(parsers.cfparse('o Json de resposta deve conter uma lista de reservas'),target_fixture="context")

def check_response_reservation_json_erro(context):
    
    response_data = context["response"].json()
    assert  response_data.get("detail","") is not None 


#------------- Histórico sem reservas

@scenario(scenario_name ="Histórico de user sem reservas", feature_name = "../feature/manage_historic.feature")
def test_historic_by_user_sucess_404():
    pass

@given(parsers.cfparse('existe um usuário de user name "{user}" cadastrado no banco de dados'))
def mock_accommodation_service_response(user: str):

    result = Validation.get_user_by_id(user)
    assert result 
    

@when(parsers.cfparse('é enviado uma requisição GET para "{url_requisition}" entre os dias "{day_in}" e "{day_out}"'),
    target_fixture="context"
)   
def get_historic_error(client, context, url_requisition: str, day_in: str, day_out: str):
    
    response = client.get(url_requisition, params={"checkin": day_in, "checkout": day_out})
    context["response"] = response
    return context

@then(parsers.cfparse('o status do código deve ser "{status_code}"'), target_fixture="context") 
def check_historic_status_code(context, status_code: str): 
    assert context["response"].status_code == int(status_code) 
    return context
