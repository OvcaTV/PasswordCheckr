import {useState} from 'react';
import PasswordInput from './assets/PasswordInput';
import PasswordStrength from './assets/PasswordStrength';
import CharacterSequenceValidator from './assets/CharacterSequenceValidator';
import PasswordTimeValidator from './assets/PasswordTimeValidator';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const [password, setPassword] = useState('');
    const [passwordStartTime, setPasswordStartTime] = useState(Date.now());

    const handlePasswordChange = (newPassword: string) => {
        if (password.length === 0) {
            setPasswordStartTime(Date.now()); // Resetuje čas při prvním zadání
        }
        setPassword(newPassword);
    };

    return (
        <div style={{maxWidth: '400px', margin: '50px auto', textAlign: 'center'}}>
            <h2>Kontrola síly hesla</h2>
            <PasswordInput password={password} setPassword={handlePasswordChange}/>
            <PasswordStrength password={password}/>
            <CharacterSequenceValidator password={password}/>
            <PasswordTimeValidator password={password} passwordStartTime={passwordStartTime}/>
        </div>
    );
};
//export default App;