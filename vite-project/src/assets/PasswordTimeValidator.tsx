import { useEffect, useState } from 'react';

interface PasswordTimeValidatorProps {
    password: string;
    passwordStartTime: number;
}

export default function PasswordTimeValidator({ password, passwordStartTime }: PasswordTimeValidatorProps) {
    const [timeTaken, setTimeTaken] = useState(0);
    const minTime = 5000; // 5 sekund

    useEffect(() => {
        if (password.length > 0) {
            const endTime = Date.now();
            setTimeTaken(endTime - passwordStartTime);
        }
    }, [password]);

    return (
        <div style={{ color: timeTaken >= minTime ? 'green' : 'red' }}>
            {timeTaken >= minTime
                ? `✅ Heslo bylo zadáno za ${timeTaken / 1000} sekund.`
                : `❌ Heslo bylo zadáno příliš rychle (${timeTaken / 1000} sekund).`}
        </div>
    );
}