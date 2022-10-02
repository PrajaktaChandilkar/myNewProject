import React from "react";
function SaveResponse() {

    const [userName, setUserName] = React.useState('');
    const[Response, setAllResponses] = React.useState('')
    const userResponse = [];
    const [stopInfiniteLoop, setStopInfiniteLoop] = React.useState(false);
    if (!stopInfiniteLoop) {
        fetch('https://learning-at-acciojob-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                for (const dataItem in data) {
                    console.log(
                        data[dataItem].userName,
                    );
                    userResponse.push({ userName: data[dataItem].userName });
                }
                setAllResponses(userResponse);
            })
        setStopInfiniteLoop(true);
    }

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('userName: ', userName);

        if (userName === '') {
            alert("please enter email");
            return;
        }


        fetch('https://myfirstrealtimedatabase-9563d-default-rtdb.asia-southeast1.firebasedatabase.app/message.json',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userName: userName,
                })
            }
        ).then(res => {
            console.log('res: ', res);
            return res.json();
        }).then(data => {
            console.log('data: ', data);
        })

        setUserName('')
        alert('Subscribed')
    }


    return (

        <form on onSubmit={handleSubmit}>
            <div className="subscribe">
                <input type="email" name="email" id="email" placeholder="Enter email"  onChange={handleUserNameChange} value={userName} />
                <button className='input-submit' type="submit" >Subscribe</button>
            </div>
        </form>

       //   <div className='container'>
        //       <div className='container-box'>
        //           <div className='form-container'>
        //               <form onSubmit={handleSubmit} >
        //                   <input className='input-user-name' type="email" placeholder="Enter Name" onChange={handleUserNameChange} value={userName}/>
        //                   <button className='input-submit' type="submit" >Subscribe</button>
        //               </form>
        //           </div>


        //       </div>

        //   </div>
    )
}

export default SaveResponse
