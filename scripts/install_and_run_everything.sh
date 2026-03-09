#!/bin/bash

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

osascript <<EOF
tell application "iTerm"
    activate

    -- ========== Right Column ==========
    set right_shift to 1176

    -- Window 5 (Bottom Right) - reuse current window
    set lastWindow to current window
    tell lastWindow
        set bounds to {0 + right_shift, 365, 550 + right_shift, 1025}
        tell current session
            write text "cd '$BASE_DIR/../Core'"
            write text "npm install && cd ios && pod install && cd .."
        end tell
    end tell

    -- Window 4 (Top Right)
    create window with default profile
    tell current window
        set bounds to {0 + right_shift, 0, 550 + right_shift, 330}
        tell current session
            write text "cd '$BASE_DIR/../Core'"
            write text "npm install && cd ios && pod install && cd .."
            write text "npm run start"
        end tell
    end tell

    
    -- ========== Left Column ==========
    -- Window 1 (Top Left)
    create window with default profile
    tell current window
        set bounds to {0, 0, 550, 330}
        tell current session
            write text "cd '$BASE_DIR/../TransactionsPlugin'"
            write text "npm install && cd ios && pod install && cd .."
            write text "npm run start"
        end tell
    end tell

    -- Window 2 (Middle Left)
    create window with default profile
    tell current window
        set bounds to {0, 365, 550, 700}
        tell current session
            write text "cd '$BASE_DIR/../ProfilePlugin'"
            write text "npm install && cd ios && pod install && cd .."
            write text "npm run start"
        end tell
    end tell

    -- Window 3 (Bottom Left)
    create window with default profile
    tell current window
        set bounds to {0, 700, 550, 1025}
        tell current session
            write text "cd '$BASE_DIR/../AuthPlugin'"
            write text "npm install && cd ios && pod install && cd .."
            write text "npm run start"
        end tell
    end tell
end tell
EOF