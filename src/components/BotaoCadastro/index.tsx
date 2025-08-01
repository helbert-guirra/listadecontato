import { Link } from 'react-router-dom'
import styled from 'styled-components'
import imagemAddContato from '../../icons/contact-book.png'

const BotaoContainer = styled.div`
  img {
    width: 30px;
    height: 30px;
  }
`

const BotaoCadastro = () => (
  <Link to="/novo">
    <BotaoContainer>
      <img src={imagemAddContato} alt="Cadastrar novo contato" />
    </BotaoContainer>
  </Link>
)

export default BotaoCadastro
