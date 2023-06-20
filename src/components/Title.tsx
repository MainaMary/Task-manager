interface Props{
    title:string
}

const Title = ({title}:Props) => {
  return (
    <p className='text-primary-color text-md '>{title}</p>
  )
}

export default Title