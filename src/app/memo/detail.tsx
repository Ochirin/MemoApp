import {View, StyleSheet,ScrollView, Text} from 'react-native'
import Icon from '../../components/Icon'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023年10月1日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBdodyText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために使います。
                    本文用なので使い方を間違えると不自然に見えることもありますので注意。
                </Text>
            </ScrollView>
            <CircleButton style={{top: 160, bottom: 'auto' }}>
                <Icon name='pencil' size={40} color="#ffffff"/>
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16
    },
    memoBody: {
        flex: 1,
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBdodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})

export default Detail
