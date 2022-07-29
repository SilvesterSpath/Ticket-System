import {Link} from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';


const Home = () => {
  return (
    <>
      <section className="heading">
        <h1>What do you need help with</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link className="btn btn-reverse btn-block" to='/new-ticket'>
        <FaQuestionCircle/>Create new ticket
      </Link>
      <Link className="btn btn-reverse btn-block" to='/new-ticket2'>
        <FaQuestionCircle/>Create new ticket2
      </Link>
      <Link className="btn btn-block" to='/tickets'>
        <FaTicketAlt/>View tickets
      </Link>
    </>
  )
}

export default Home