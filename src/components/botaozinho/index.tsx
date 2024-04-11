import { IPage } from "../../../App";
import { TouchableOpacity, Image } from "react-native";
import React from "react";

export function Botaozinho({IsetPage, Ipage}:IPage){
    const coracao = require("../../assets/coracao.png")
    const coracaocinza = require("../../assets/coracaocinza.png")
    return(
        <>
            <TouchableOpacity onPress={() => IsetPage(1)}><Image source={Ipage == 1 ? coracaocinza : coracao}/></TouchableOpacity>
            <TouchableOpacity onPress={() => IsetPage(2)}><Image source={Ipage == 2 ? coracaocinza : coracao}/></TouchableOpacity>
            <TouchableOpacity onPress={() => IsetPage(3)}><Image source={Ipage == 3 ? coracaocinza : coracao}/></TouchableOpacity>
        </>    
    )
}