import { useEffect, useState } from "react";

export function ThemeSwitch() {
    const [switchState, setSwitchState] = useState((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) || false);
    // to-do: remember theme value, especially if we are going to have multiple pages
    useEffect(() => {
        document.body.dataset.theme = (switchState ? 'dark' : 'light');
    }, [switchState]);
  
    return (
      <label class="switch">
        <input class='toggle-checkbox' type='checkbox' id="theme-switch" onChange={() => setSwitchState(!switchState)}></input>
        <div class='toggle-slot'>
            <div class='sun-icon-wrapper'>
                <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
            </div>
            <div class='toggle-button'></div>
            <div class='moon-icon-wrapper'>
                <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
            </div>
        </div>
      </label>
    )
  }