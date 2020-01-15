from channels.routing import ProtocolTypeRouter

application = ProtocolTypeRouter({
    
})

# from channels.routing import route
# from authentication.consumers import ws_connect, ws_disconnect

# application = [
#     route("websocket.connect", ws_connect),
#     route("websocket.disconnect", ws_disconnect)
# ]