import React , {createContext, useState, useContext} from 'react'
import useLocalStorage from './useLocalStorage'

const PluginContext=createContext()
const PluginUpdateContext=createContext()
const PluginEmptyContext=createContext()
const RemovePluginItemContext=createContext()

export function usePlugin(){
    return useContext(PluginContext)
}
export function usePluginUpdate(){
    return useContext(PluginUpdateContext)
}
export function usePluginEmpty(){
    return useContext(PluginEmptyContext)
}
export function RemovePluginItem(){
    return useContext(RemovePluginItemContext)
}

export default function PluginContextProvider({children}){
    const [plugin,setPlugin]=useLocalStorage("plugin",[])

    const addToPlugin=(data)=>{
        setPlugin(prev=>[...prev,data])
    }
    const emptyPlugin=()=>{
        setPlugin([])
    }
    function removePluginItem(item){
        
        let newPlugin=[]
        plugin.forEach(a=>{
            if(a!=item) {newPlugin.push(a)}
        })
        setPlugin(newPlugin)
        
    }
    return(
        <PluginContext.Provider value={plugin}>
            <PluginUpdateContext.Provider value={addToPlugin}>
                <PluginEmptyContext.Provider value={emptyPlugin}>
                    <RemovePluginItemContext.Provider value={removePluginItem}>
                        {children}
                    </RemovePluginItemContext.Provider>
                </PluginEmptyContext.Provider>
            </PluginUpdateContext.Provider>
        </PluginContext.Provider>
    )
}