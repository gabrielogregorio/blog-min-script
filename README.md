## Objetivo
A ideia deste projeto é o fornecimento de micro scripts para resolverem problemas específicos, como por exemplo, como usar o JWT em uma aplicação NodeJs.

## Parece um stackoverflow? 
Ok, confesso, parece um pouco, porém, o stackoverflow tem um monte de respostas gigantescas, com um monte de coisa inútil e que não faz parte do escopo de uma solução. 
Vários trechos de código são cópias de aplicações inteiras em outros contextos, o que faz com que a solução fique ofuscada e custosa em termos de tempo para ser encontrada. Além do mais, muitas respostas não contém a versão testada, um exemplo disso é o uso de nextjs 14 com Firebase, onde uma solução para a versão 8 do Firebase pode não funcionar com a versão 9, e um tutorial do stackoverflow pode esconder esse detalhe.
Então, afim de facilitar nossa vida, a ideia desse projeto(futuramente) é a geração de scripts exclusivos, comentados e com detalhes de versões para resolver problemas específicos, sem ‘floriamentos‘ ou ruídos.
## Exemplo:

### Como fazer o C++ reconhecer caracteres UTF-8?

| Item | Informação |
|------|-------------|
|Sistema Operacional | Windows 10 |
|Programa | DevC++ |
|Versão Devc++ | 5.11 (27 de Abril de 2015) |
|Adicional Devc++ | Programa criado com o create project |

#### Para resolver esse problema basta incluir o locale.h    
```cplusplus
#include <iostream>
```
#### E posteriormente usar o setLocale   
```cplusplus
setlocale(LC_ALL,"portuguese");
```

### Exemplo de Código Completo:

```cplusplus
#include <iostream>

/* Isso afeta outras coisas além da codificação */
#include <locale.h>

using namespace std;

int main() {
    setlocale(LC_ALL,"portuguese");
    cout << "Olá Mundo!" << endl;
    return 0;
}
```

Resultados:
Sem o include e o setLocale
> Ol Mundo

Com o include e o locale
> Olá mundo
