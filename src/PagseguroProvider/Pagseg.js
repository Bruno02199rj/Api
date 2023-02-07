var cart = require('../models/Cart')
var pag, pagseguro;
pagseguro = require('pagseguro');
var vazio = null




const providerController = {
  //trazer dados dinamicamente que foram solicitados via post api 
  //trazer valores dos items e os itens 
  async get(req, res) {

    try {
      const { _id } = await req.params
      console.log('passando get')
      const p = await cart.findById({ _id }).populate('products')

      pag = new pagseguro({
        email: 'brunodim1@hotmail.com',
        token: '45CEA567FDE3483E8CBBB9189BEFF7DE',
        mode: 'sandbox'
      });

      //Configurando a moeda e a referência do pedido
      pag.currency('BRL');
      pag.reference('12345');

      //Adicionando itens

      p.products?.map((item, index) => {
        console.log(item)
 
    //fazer verificação de cores
       pag.addItem({
          id: item._id.toString(),
          description: item.productName  + " TAMANHO:"+ p.sizeOption[index] ,
          amount: item.productPrice.toFixed(2),
          quantity: 1,
          weight: 2342
        })

      })
      const code = pag.send((err, response) => {

        console.log(err  +'47')

        const regexexp = /<code>(.+?)<\/code>/
        const match = regexexp.exec(response)
        console.log(match[1] + ' 53')

        var checkcode = `https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=${match[1]}`
        return  res.status(200).json(checkcode)

      });

      //Configurando as informações do comprador
      //Configurando a entrega do pedid   
      //Configuranto URLs de retorno e de notificação (Opcional)
      //ver https://pagseguro.uol.com.br/v2/guia-de-integracao/finalizacao-do-pagamento.html#v2-item-redirecionando-o-comprador-para-uma-url-dinamica   
      //dar um redirect com essa url 
      //Enviando o xml ao pagsegu

      console.log(vazio + ' passou aqui 62')
      //return res.status(200).json(code)

    } catch (err) {
      console.log(err)
    }

  },

}

module.exports = providerController