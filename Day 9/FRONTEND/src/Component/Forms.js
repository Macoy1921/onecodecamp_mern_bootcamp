const Forms = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            
        <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </div>

    
            </form>
        </div>
    );
}

export default Forms;
