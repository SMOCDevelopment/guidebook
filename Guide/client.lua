RegisterCommand("guidebook", function()
    SetNuiFocus(true, true)
    SendNUIMessage({ type = "toggleGuidebook" })
end)

RegisterKeyMapping("guidebook", "Open the FivePD Guidebook", "keyboard", "F7")

RegisterNUICallback("closeBook", function(_, cb)
    SetNuiFocus(false, false)
    cb({})
end)
