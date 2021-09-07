import Passcode from './Passcode';
const Page = ({title, secret}) => (
  <div className='container'>
    <hr/>
    <h2 className="h2">{title}</h2>
    <Passcode secret={secret} />
    <style jsx>{`
      .h2 {
        font-size: 2rem;
      }
    `}</style>
  </div>
)
export default Page;