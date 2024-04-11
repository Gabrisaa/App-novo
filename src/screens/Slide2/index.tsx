import { ImageBackground, Text, View } from "react-native"
import { Botaozinho } from "../../components/botaozinho"
import { styles } from './styles'
import { IPage } from "../../../App"
import { MenuStackTypes} from "../../navigation/MenuStack.navigation"


export function Slide2({ Ipage, IsetPage }: IPage) {
    const slide = require('../../assets/fundo2.png')
    const coracao = require("../../assets/coracao.png")
    const cinza = require("../../assets/coracaocinza.png")
    return (
        <>
            <ImageBackground style={styles.container} source={slide} />
            <View>
                <Text>Aqui você pode montar sua lista de convidados, fazer uma média de gastos e criar uma contagem regressiva </Text>
                <View style={styles.baixo} >
                    <Botaozinho Ipage={Ipage} IsetPage={IsetPage} />
                </View>
            </View>

        </>
    )
}