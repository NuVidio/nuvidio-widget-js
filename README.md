# NuVidio Widget JS
Biblioteca para integrar o **NuVidio Widget** em aplicações javascript.

## Instalação
Para instalar, basta rodar o comando abaixo no terminal de preferência.
```shell
  npm i nuvidio-widget-js
```

## Como usar

## Importação dos scripts

A primeira coisa a ser feita, é importar o script do widget.
Isso garante que o script do widget estará disponível quando um departamento for definido.
A importação pode ser feita através do método `importScripts`.

```jsx
import NuVidioWidget from 'nuvidio-widget-js';

// ...

NuVidioWidget.importScripts();

// ...
```

### Definir um departamento

Para usar o NuVidio Widget na sua aplicação, você deve ter o identificar único do
departamento que foi criado no painel de controle da empresa.
Com o identificador em mãos, basta utilizar o método `setDepartment`. <br/>

Ex.:

```jsx
import NuVidioWidget from 'nuvidio-widget-js';

// ...

NuVidioWidget.setDepartment('identifier', options);

// ...
```

Você também pode definir algumas opções para o widget, através do parâmetro `options`. Isso permite a mudança 
de algumas configurações no comportamento do widget.
([Type `NuVidioWidgetOptions`](#nuvidiowidgetoptions))

> **Atenção**: Caso o **NuVidio Widget** já tenha sido adicionado à página, a <u>configuração anterior será sobreposta</u>

### Remover NuVidio Widget

É possível remover o widget a qualquer momento através do método `removeWidget`:

```jsx
import NuVidioWidget from 'nuvidio-widget-js';

// ...

NuVidioWidget.removeWidget();

// ...
```

### Usando um botão personalizado

O pop-up do widget pode ser aberto por seu próprio botão personalizado. Para usar esta funcionalidade, seu botão deve conter o id ou class `nuvidio-widget-button`. <br/> Ex.: 

```html
<button id="nuvidio-widget-button" class="any-class-you-want">Widget</button>
<button class="nuvidio-widget-button any-class-you-want">Widget</button>
```

O modelo que usa id é mais confiável, mas pode ser aplicado a apenas 1 botão, enquanto um nome de classe pode ser usado em vários botões.

## API

### Parâmetros aceitos

| **Property**     | Type          | Required | Default         | Description                                                                                         |
| --------------   | ------------- | -------- | ----------------| --------------------------------------------------------------------------                          |
| fabButton        | `boolean`     | ❌       | false           | Esta opção oculta o botão fab inferior esquerdo usado para abrir o pop-up do vídeo.                 |
| fabButtonContent | `string`      | ❌       | Falar agora     | Define o texto dentro do botão do canto inferior esquerdo.                                          |
| open             | `boolean`     | ❌       | false           | Se esta opção for definida como verdadeira, o widget será aberto quando setDepartment for chamado.  |
| errorMessage     | `string`      | ❌       | default message | Configure a mensagem padrão mostrada ao usuário quando ocorrer algum erro no widget.                |
| clientData       | `object`      | ❌       | -               | Este objeto é usado para passar os dados do cliente para o widget. [(Type clientData)](#clientdata) |


#### clientData

| **Property**     | Type          | Required | Default  | Description                                                                                                                                                                                                                 |
| --------------   | ------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name             | `string`      | ❌       | -        | Nome do cliente.                                                                                                                                                                                                            |
| email            | `string`      | ❌       | -        | Email do cliente (O campo email pode ser preenchido com um outro valor, como telefone por exemplo).                                                                                                                         |
| tel              | `string`      | ❌       | -        | Telefone do cliente.                                                                                                                                                                                                        |
| pushToQueue      | `boolean`     | ❌       | false    | Esta opção define se os dados do cliente serão enviados para a fila sem confirmação do cliente. Se verdadeiro, o cliente será enviado para a fila automaticamente. (campos de nome e tel (ou e-mail) devem ser preenchidos) |

## Contact

Any question or sugestion? You can use the [GitHub Issues](https://github.com/NuVidio/nuvidio-widget-js/issues) or send a email to gustavo@nuvidio.com.br.
