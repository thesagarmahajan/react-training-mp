import "./MyFirstComponent.css"

const mydetails = {
    name:"Sagar",
    email:"sagar@gmail.com",
    phone:"1231231232"
};
function MyFirstComponent(){
    return (
        <>
            <h1 className="some">{mydetails.name}</h1>
            <h1 className="some">{mydetails.email}</h1>
            <h1 className="some">{mydetails.phone}</h1>
        </>
    );
}

export default MyFirstComponent;