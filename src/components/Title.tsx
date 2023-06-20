interface Props{
    title:string
}

const Title = ({title}:Props) => {
  return (
    <p className='text-primary-color text-2xl '>{title}</p>
  )
}

export default Title