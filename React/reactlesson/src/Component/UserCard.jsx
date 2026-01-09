

function UserCard({name , age , skills  }) {
  return (

    <>
    <h2>Name : {name}</h2>
    <p>Age : {age}</p>

    <ol style={{listStyleType:"none"}}>
        {skills.map(skill => (
            <li key={skill}>{skill}</li>
        ))}
    </ol>


    
    </>
  )
}

export default UserCard