import React from 'react'

function About({logo, name, about}) {
  return (
    <div>
        <aside>
            {logo ? (
              <img src={logo} alt={`blog logo`} />
            ) : (
              <img src={`https://via.placeholder.com/215`} alt={`blog logo`} />
            )}
            
            <p>
                {about}
            </p>
        </aside>
    </div>
  )
}

export default About