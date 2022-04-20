import requests as req
import json

link = 'https://base-login-112c0-default-rtdb.firebaseio.com/clientes'

# faz a leitura dos dados do banco de dados
def read_data():
    global link
    requisicao = req.get(f'{link}/.json')
    dic = requisicao.json()
    return dic

# deleta um usuário
def del_user(user: str):
    global link
    requisicao = req.delete(f'{link}/{user}/.json', )
    return requisicao

# adiciona um usuario
def add_user(cads: list):
    global link
    if len(cads) == 2:
        dic = {'email':cads[0], 'senha':cads[1]}
        requisicao = req.post(f'{link}/.json', json.dumps(dic))
        return requisicao
    else:
        raise ValueError('Quantidade de dados inválidos')

# altera a senha de um usuario
def alter(user: str, mud: dict):
    global link
    requisicao = req.patch(f'{link}/{user}/.json', json.dumps(mud))
    return requisicao

def users():
    global link
    dic = read_data()
    user_list = [user for user in dic]
    return user_list

def busq(user: str, item: str = 'all'):
    dic = read_data()
    if item == 'email' or item == 'senha':
        return dic[user][item]
    else:
        if item == 'all':
            return dic[user]
        else:
            raise ValueError('Esse valor não existe no dicionário')

if __name__ == '__main__':
    alter('-N07_mfkXG2CoQBVI5mt', {'senha':321})
    dic = busq('-N07_mfkXG2CoQBVI5mt', item='senha')
    print(dic)
