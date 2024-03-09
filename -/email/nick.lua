function Nickname(link)
    local pLink = {}
    for partE in string.gmatch(link, "[^/]+") do
        table.insert(pLink, partE)
    end

    local Nickname = partESLink[#partESLink]:match("(.*)_")
    
    return Nickname
end

-- Link dado
local link = "https://oesky.com/@282_php.xampoo.783gh/7/NICKNAME_pou"

local nickname = Nickname(link)

if Nickname then
    print("Nickname registered: " ..)
else
    print("Nickname not found.")
end
-- ../msg.txt