#!/bin/bash

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

osascript <<EOF
tell application "iTerm"
    activate

    -- ========== Right Column ==========
    set right_shift to 1076

    -- Window 5 (Bottom Right) - reuse current window
    set lastWindow to current window
    tell lastWindow
        set bounds to {0 + right_shift, 365, 650 + right_shift, 1025}
        tell current session
            write text "cd '$BASE_DIR/../CoreApp'"
            write text "rm -rf ios/build && rm -rf ~/Library/Developer/Xcode/DerivedData/*"
        end tell
    end tell

    -- Window 4 (Top Right)
    create window with default profile
    tell current window
        set bounds to {0 + right_shift, 0, 650 + right_shift, 330}
        tell current session
            write text "cd '$BASE_DIR/../CoreApp'"
            write text "npm install && cd ios && pod install && cd .."
            write text "npm run start"
        end tell
    end tell

    
    -- ========== Left Column ==========
    -- Window 1 (Top Left)
    create window with default profile
    tell current window
        set bounds to {0, 0, 700, 330}
        tell current session
            write text "cd '$BASE_DIR/../Dashboard'"
            write text "npm install && cd ios && pod install && cd .."
            write text "npm run start"
        end tell
    end tell

    -- Window 2 (Middle Left)
    create window with default profile
    tell current window
        set bounds to {0, 365, 700, 700}
        tell current session
            write text "cd '$BASE_DIR/../login'"
            write text "npm install && cd ios && pod install && cd .."
            write text "npm run start"
        end tell
    end tell
end tell
EOF