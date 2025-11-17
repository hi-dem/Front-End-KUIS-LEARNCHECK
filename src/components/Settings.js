import React, { useState } from 'react';

const Settings = () => {
    const [theme, setTheme] = useState('light');
    const [textSize, setTextSize] = useState('medium');

    const handleThemeChange = (e) => setTheme(e.target.value);
    const handleTextSizeChange = (e) => setTextSize(e.target.value);

    return (
        <div className="settings-container">
            <h2 className="text-xl">Settings</h2>
            <div className="mt-4">
                <label htmlFor="theme">Theme: </label>
                <select id="theme" value={theme} onChange={handleThemeChange}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <div className="mt-4">
                <label htmlFor="textSize">Text Size: </label>
                <select id="textSize" value={textSize} onChange={handleTextSizeChange}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    );
};

export default Settings;
