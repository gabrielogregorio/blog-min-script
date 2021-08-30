const posts = [
    {
        title: 'Como ver a versão do Python que está sendo executada?',
        date: Date.now(),
        body: `,
    #Importe a biblioteca sys
    import sys
    
    # Use o version
    print(sys.version)
    
    # Saída: 3.7.3 (default, Mar 27 2019, 22:11:17)
        `
    },
    {
        title: 'Como declarar arrays no C++?',
        date: Date.now(),
        body: `
Neste tutorial temo três partes, três formas de declarar um ARRAY, uma forma de atribuir e uma forma de percorrer os itens e acessa-los.

Resultado do script:

    No loop do array com lixo, vemos que não tivemos o lixo como descrito, isso pode acontecer, mas você deve tomar cuidado pois essas posições que NÃO FORAM ATRIBUIDAS podem vir com lixo!        
    #include <iostream>

    using namespace std;
    
    int main(){
        /* FORMAS DE INICIAR UM ARRAY */
        /* Array com 10 posições com lixo (Valores aleatórios) */
        int numeros[5];
    
        /* Arrays com 10 posições com zeros */
        int outros[5] = {};
    
        /* Array de caracteres com 3 posições */
        char letras[] = {'a','b','c'};
    
        /* FORMA DE ATRIBUIR VALOR AS POSIÇÔES */
        numeros[0] = 10;
        numeros[1] = 20;
        numeros[2] = 30;
       
        /* FORMA DE PERCORRER AS POSIÇÕES */
        cout << "Array iniciado com zeros" << endl;
        for (int i = 0; i<5; i++){
            cout << outros[i] << endl;
        }
        
        cout << "\nArray iniciado com lixo com alguns valores atribuidos" << endl;
        for (int i = 0; i< 5; i++){
            cout << numeros[i] << endl;
        }
        
        cout << "\nArray de letras" << endl;
        for (int i = 0; i < 3 ; i++){
            cout << letras[i] << endl;
        }
        return 0;
    }
        `,
    },
    {
        title: 'como fazer o C++ reconhecer caracteres utf-8?',
        date: Date.now(),
        body: `
Programa usado: Projeto criado no DevC++
Plataforma usada: Windows 10

#include <iostream>

    /* Isso afeta outras coisas além da codificação */
    #include <locale.h>

    using namespace std;

    int main() {
        setlocale(LC_ALL,"portuguese");
        cout << "Testando caracteres com acentos, Olá Mundo!" << endl;
        return 0;
    }`
    },
    {
        title: 'Como fazer Slicing no Python?',
        date: Date.now(),
        body: `
        Descrição:
        O Slicing no Python é basicamente você fatiar coisas, você pode fatiar uma String, uma lista ou uma tupla.
        
        Python usado: 3.9
        
        Código:
        
        
        texto = 'Isso é um texto'
        lista = ['item1', 'item2', 3]
        
        print('Texto: ', texto)
        print('Lista: ', lista)
        print()
        
        # Retorna a primeira posição
        print(texto[0])
        
        # Retorna da posição 0 até a 2, Excluindo a posição 2
        print(texto[0:2])
        
        # Retorna a posição inicial até a 10
        print(texto[:10])
        
        # Retorna a posição 10 até a final
        print(texto[10:])
        
        # Retorna os itens da posição -2 até a final
        print(lista[-2:])
        
        
        Resultado da execução do script:
        `
    },

    {
        title: 'Como fazer um Hello World em COBOL?',
        date: Date.now(),
        body: `
        1234567: contagem de linhas

        * Fiz esse programa usando o open cobol
         IDENTIFICATION                     DIVISION.
         PROGRAM-ID. HELLO-WORLD.
  
         PROCEDURE                          DIVISION.
              DISPLAY "Hello world"
              STOP RUN.
         END PROGRAM HELLO-WORLD.
        `
    },
    {
        title: 'Como fazer um Hello World em C++?',
        date: Date.now(),
        body: `
        dezembro 24, 2019
        #include <iostream>
        
        using namespace std;
        
        int main(){
            cout << "Olá Mundo ";
            return 0;
        }
        
        // usei o comando "g++ nomDoPrograma.cpp -o nomeProgramaSaida"
        // sem as aspas para compilar no Ubuntu 16.04
        `
    },
    {
        title: 'Como usar os decorators em Python?',
        date: Date.now(),
        body: `
        class paramaiusculo(object):
        
            # Método contrutor passando ele mesmo e a função
            def __init__(self,funcao):
                pass
        
            # Passando todos os possíveis argumentos da função quando ela for chamada
            def __call__(self,*argumentos):
        
                # Pegando o primeiro argumento e colocando em mausculo
                return argumentos[0].upper()
        
        # Muda o comportamento da função
        @paramaiusculo
        def mostrar(nome):
            return nome
        
        print(mostrar("Mariana"))
        `
    },
    {
        title: 'Como fazer funções e atributos privados em Pyhon',
        date: Date.now(),
        body: `
        # Coloque o __ para deixar uma função ou um atributo privado

        class pessoa:
            def __init__(self,nome, senha):
                self.nome = nome          # O nome é um atributo publico
                self.__senha = senha      # A __senha é um atributo privado da classe
        
            # Função que pode ser acessada através da instância
            def mostrarSenha(self):
                # Acessando um atributo privado
                print(self.__senha)
        
            # Função que pode ser acessada através da instância
            def alterarSenha(self):        
                # Acessando o método privado
                self.__gerarNovaSenha()
        
            # Esse é um método privado!
            # Esse método só pode ser acessado de dentro da classe pessoa
            def __gerarNovaSenha(self):
                novaSenha = input("Digite a nova senha: ")
        
                # Acessando o Atributo privado
                self.__senha = novaSenha
        
        # Cria uma nova instância de pessoa
        beatriz = pessoa("Beatriz Zara","bia123")
        
        # Acessando as funções publicas
        beatriz.mostrarSenha()
        beatriz.alterarSenha()
        beatriz.mostrarSenha()
        
        # Acessando os atributos publicos
        print(beatriz.nome)
        
        # Isso dará erro, porque esse é um atributo privado, inacessível atravéz da Instância
        #print(beatriz.__senha)
        
        # Isso dará erro, porque essa é uma função privada, inacessível atravéz da Instância
        #beatriz.__gerarNovaSenha()        
        `
    },
    {
        title: 'Como consultar um CEP usando Python?',
        date: Date.now(),
        body: `
        # Importe a biblioteca
        import requests
        
        cep = input("Digite um cep para consulta: ")
        
        # Se não for um CEP Válido
        if ((not cep.isnumeric()) or (len(cep) != 8)):
            print("Cep inválido")
            exit()
        
        # Faça uma requisição
        request = requests.get('https://viacep.com.br/ws/{}/json/'.format(cep))
        
        # Obternha o Json
        dic = request.json()
        
        # Se veio um erro
        if 'erro' in dic.keys():
            print('erro')
        
        else: # Se não veio nenhum erro
        
            # Exiba os dados
            print('CEP         : {}'.format(dic['cep']))
            print('Localidade  : {}'.format(dic['localidade']))
            print('UF          : {}'.format(dic['uf']))
        `
    },

    {
        title: 'Como criar um PDF com uma imagem dentro usando Python?',
        date: Date.now(),
        body: `
        Versão do Python usada: 3.9.5
        Bibliotecas Usadas: pip install Pillow==8.1.2
        Plataformas Testadas: Windows 10.
        Imagem usada com referencia
        
        
        Image by Foundry Co from Pixabay
        
        Baixar o PDF Gerado
        
        Código:
        # Importe a biblioteca
        from PIL import Image
        
        # Abra a imagem | Coloque o local da imagem!
        im1 = Image.open("pixabay.jpg")
        
        # Defina uma lista com as imagens
        listaImagens = [im1]
        
        # Coloque a imagem dentro de um PDF chamado arquivo.pdf
        im1.save("arquivo.pdf", "PDF" ,resolution = 100.0, save=True, append_image=listaImagens)        
        `
    },
    {
        title: 'Como usar operadores lógicos em Python?',
        date: Date.now(),
        body: `
        nome = 'gabriel'
        lista = [1,2,3,4,5]
        
        print( 3 != 4 and     4 == 4)
        print( 3 != 4 or      2 == 4)
        print( 3 != 4 and not 2 == 4)
        print( 3      in      lista)
        print( 10     not in  lista)
        print( nome   is      'gabriel')
        print( nome   is not  'Marcela')        
        `
    },

    {
        title: 'Como funciona as exceções em Python?',
        date: Date.now(),
        body: `
        # Tente
        try:
            # divisão por zero
            print(0/0)
        
            # dividindo string por número
            # print("texto" / 10)
        
            # print("Descomente para acontecer sem erros")
        
        # Capturando um erro especifico
        except ZeroDivisionError:
            print("Você não pode dividir um número por zero!")
        
        # Capturando qualquer erro
        except Exception as erro:
            print("Aconteceu um erro ",erro)
        
        # Se não acontecer nenhum erro
        else:
            print("Não aconteceu nenhum erro")
        
        # Em qualquer caso
        finally:
            print("Tentativa finalizada")
        `
    },
    {
        title: 'Como trabalhar com classes em Python?',
        date: Date.now(),
        body: `
        nome = 'gabriel'
        lista = [1,2,3,4,5]
        
        print( 3 != 4 and     4 == 4)
        print( 3 != 4 or      2 == 4)
        print( 3 != 4 and not 2 == 4)
        print( 3      in      lista)
        print( 10     not in  lista)
        print( nome   is      'gabriel')
        print( nome   is not  'Marcela')        
        `
    },
    {
        title: 'Como trabalhar com função e função lambda em Python?',
        date: Date.now(),
        body: `
        # Funções normais
        def soma(valor1,valor2):
            return valor1+valor2
        
        # Entrada de dados
        valor1 = 5
        valor2 = 4
        
        print('A soma de {} com {} é {}'.format(valor1,valor2, soma(valor1,valor2)))
        
        # Funções lambda
        x = 10
        y = 20
        soma_l = lambda x,y: x+y
        
        print("A soma de {} e {} é {}".format(x, y , soma_l(x,y)))
        `
    },
    {
        title: 'Como baixar todos os arquivos de um site? ( Exemplo com imagens)',
        date: Date.now(),
        body: `
        # === Instale as bibliotecas necessárias ===
        # pip install requests
        # pip install bs4
        
        from bs4 import BeautifulSoup
        import requests
        import os
        
        def obterHTML(link_site):
            # Faça uma requisição
            r = requests.get(link_site)
        
            # obtenha o HTML
            return BeautifulSoup(r.content,'html.parser')
        
        # Lista com os sites
        lista2 = ["https://pixabay.com/images/search/montanhas/","https://pixabay.com/images/search/carros/"]
        
        # Para cada site:
        for site in lista2:
            # Obtenha o HTML
            html = obterHTML(site)
        
            # Defina o diretório como o nome da página do site
            diretorio = site.split(".com/")
        
            # Corrija problemas com o nome de forma local
            pasta = diretorio[1].replace('/','')
        
            # Tente criar uma pasta
            os.mkdir(pasta)
        
            # Ande por todas as tags do site
            for link in html.select("img"):
        
                # Se tiver src, que é um link, na tag img
                if 'src=' in str(link):
        
                    # Obtenha o atributo src, que contém o link das imagens
                    lnk = link['src']
        
                    # Se contiver uma imagem
                    if '.jpg' in lnk or 'png' in lnk or 'jpeg' in lnk:
        
                        # Obtenha o nome da imagem, corrigindo problemas
                        name = lnk.split('/')
        
                        # baixe o arquivo com o ultimo nome na imagem
                        with open(pasta+"/"+name[-1],'wb') as f:
                            # Criar o arquivo localmelmente
                            f.write(requests.get(lnk).content)
        
                        print('Imagem {} Obtida do site {} na pasta {}'.format(name[-1],site, pasta))        
        `
    },
    {
        title: 'Como fazer login em um site usando a biblioteca requests do Python?',
        date: Date.now(),
        body: `
        import requests
        import time
        
        payload = {
            'nomeDoCampo_name': 'digite seu login',
            'nomeDoCampo_name': 'digite sua senha',
            'nomeDoCampo_name': 'login'}
        
        def fazerLogin(payload):
            with requests.Session() as s:
                p = s.post("Link da pagina do roteador",data=payload)
        
        while True:
            # Tente fazer login
            try:
                fazerLogin(payload)
        
            # Se der errado, já está logado.
            except:
                i = input('logado!')
                break
        
            # Se der certo, é por que a página respondeu
            else:
                print("Tentando fazer Login")
        
            # Espere para não dar um DDOS na página
            time.sleep(1)
        `
    },
    {
        title: 'Como trabalhar com lista em Python?',
        date: Date.now(),
        body: `
        lista = [1,2,3,4,5,6,7]  # lista
        print(lista)             # Exibindo a lista
        
        lista.append(8)          # Adicionar item
        print(lista)             # exibindo a lista
        
        lista.pop()              # Remover o ultimo elemento
        print(lista)             # exibindo a lista
        
        print(lista[0:5])        # Fazendo slicing
        
        print( len(lista) )      # Exibindo o tamanho da lista
        
        lista[2] = 'texto'       # Mudando valores
        print(lista)             # exibindo a lista
        
        lista.insert(2, "Antes do texto") # Inserir em uma posição especifica
        print(lista)                      # exibindo a lista
        nova_lista = ['final','final+1']  # Adicionar nova lista
        lista.extend(nova_lista)          # Estender lista
        print(lista)                      # exibindo a lista
        
        lista1 = ['gabriel','gregorio']
        lista2 = ['da','silva']
        
        print("gabriel" in lista1) # Tem Gabriel dentro da lista?
        print("lua" in lista1)     # Tem lua na frase?
        
        print(lista1)
        print(lista2)
        
        print( lista1 + lista2 )   # Concatenando duas listas
        print(lista1*2)            # Multiplicar uma lista por 2
        lista1.remove('gabriel')   # remover uma valor especifico
        print(lista1)              # exibindo a lista novamente
        
        # Lista de notas
        notas = [9.87, 9.83, 6.65, 3.64, 7.76, 9.57, 9.07, 7.67, 8.45, 3.53, 2.42, 9.75, 9.78, 9.24, 8.53, 7.35, 2.34, 6.56, 8.67]
        
        print(max(notas))       # Maior nota
        print(min(notas))       # Menor nota
        
        alunos = ['a','b']      # Lista
        
        backup = alunos.copy()  # fazer uma copia da lista alunos
        print(alunos)
        print(backup)
        
        alunos.clear()          # Limpar a lista alunos
        print(alunos)
        print(backup)
        
        codigo = [0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0] # CONTAGEM DE VALORES
        print(codigo.count(1))
        
        lista = ['b','a','c','e','d'] # lista original
        print(lista)
        
        lista.sort()            # Ordenar lista
        print(lista)
        
        lista.reverse()         # Reverter a ordem atual
        print(lista)
        `
    },
    {
        title: 'Como ler e escrever em um arquivo no Python?',
        date: Date.now(),
        body: `
        # ======= criar um arquivo ======= #
        # Abrir o arquivo como escrita (Write - W)
        file = open('arquivo.txt','w')
        
        # Escrever no arquivo
        file.write('escreva um texto aqui')
        
        # Fechar o arquivo
        file.close()
        
        # ======== abrir arquivo ======== #
        # Abertura do arquivo  como leitura (Read - R)
        file = open('arquivo.txt','r')
        
        # Ler o texto do arquivo
        texto = file.read()
        
        # Fechar o arquivo
        file.close()
        
        # Exibir o texto
        print(texto)
        
        `
    },
    {
        title: 'Como usar o Enumerate em Python?',
        date: Date.now(),
        body: `
        # Aplique o loop
        for indice, valor in enumerate('gabriel'):
        
            # Mostre a chave e o valor
            print(indice, valor)
        
        '''
        ================ Saida ================
        
        0 g
        1 a
        2 b
        3 r
        4 i
        5 e
        6 l
        '''
        `
    },
    {
        title: 'Como gerar um QrCode em Python?',
        date: Date.now(),
        body: `
        # Instale a biblioteca pyqrcode
        # pip install pyqrcode
        
        # Importe a biblioteca
        import pyqrcode
        
        # Digite o que você quer armazenar no QrCode
        q = pyqrcode.create('Isso é um QR CODE')
        
        # Salve como svg
        q.svg('img.svg', scale=4)
        
        # Salve como png 
        # Você precisa instalar o png
        # q.png('img.png',scale=10)
        `
    },
    {
        title: 'Como encontrar todas as ocorrências de uma palavra em Python?',
        date: Date.now(),
        body: `
        # Importe a biblioteca
        import re
        
        # String com o texto
        texto = '2 + 23 - 232 + 1342 / 23 * ( 232 - 23 ** 9) % 2'
        
        # Usando a função, buscando por um espaço no texto
        for valor in re.finditer(' ',texto):
        
            # Mostre todas as ocorrências, onde começa e onde termina.
            print(valor.start(),valor.end())
        `
    },

    {
        title: 'Como usar o Map, o Filter e o Reduce em Python?',
        date: Date.now(),
        body: `
        # Importe o Reduce
        from functools import reduce
        
        # ================ Como usar o MAP ================
        # Temperaturas em graus célsius
        celsius = [23,25,26,27,37,36,25,24,36,35,36,25,24,23,25]
        
        # Converter para graus fahrenheit
        # Converta para lista [ aplique a função map { aplique a funcao lambda, diga qual é a lista } ]
        fahrenheit = list(map(lambda c:((c*9)/5)+32,celsius))
        
        # Mostre a lista em Celsius
        print(celsius)
        
        # Mostre a lista em Fahrenheit
        print(fahrenheit)
        
        # =============== Como usar o REDUCE ==============
        # Elementos
        elementos = [10, 35, 34, 25, 16, 17]
        
        # Somatório dos elementos
        # Converta para inteiro ( Aplique o Reduce { aplique a função, diga a lista} )
        soma = int(reduce(lambda x , y: x + y , elementos))
        
        # Mostre os elementos
        print(elementos)
        
        # Diga a soma
        print(soma)
        
        # =============== Como usar o FILTER ==============
        resultados = [5,7,3,5.2,6,3,7,8,3,9,3,6.8,8,4,8,9,5,3,6,2,6,3,8.3,4,6,9.2,5,6,3,9.5]
        
        # Converta para lista ( aplique o filter { aplique a função, aplique a lista} )
        filtro = list(filter(lambda x : x > 8 , resultados))
        
        # Mostre a lista resultado
        print(resultados)
        
        # Aplique o resultado do filtro
        print(filtro)     
        `
    }
]

export default posts;
