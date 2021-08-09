const {useState} = require("react");
const ReactCardFlip = require("react-card-flip");
const LoginCard = require("./login-card");
const RegisterCard = require("./register-card");

export const InitialFace = {
    Login : false,
    Register: true,
}
export const AuthCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(props.face !== undefined? props.face : false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleFlip = (event) => {
        event.preventDefault();
        setIsFlipped(!isFlipped);
    }

    const handleLogin = (email, password) => {
        setEmail(email);
        setPassword(password);
        //TODO: Authenticate
    }

    const handleRegister = (email, password) => {
        if(isFlipped) {
            //Handle register User
        } else {
            setEmail(email);
            setPassword(password);
            setIsFlipped(!isFlipped);
        }
    }

    const flip = (event) => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div>
        <ReactCardFlip isFlipped={isFlipped} flipDirection={'horizontal'}>
            <LoginCard onLogin={handleLogin} onRegister={handleRegister} onCancel={() => {}}/>
            <RegisterCard flip={flip} onCancel={() => {} }/>
        </ReactCardFlip>
        </div>
    )
}