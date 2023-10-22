import { StyleSheet } from "react-native"
import { View, Text, Pressable } from "react-native";
function GoalItem({name, onDeleteItem}) {
    return (
        <Pressable onPress={onDeleteItem}>
            <View style={styles.eachGoal}>
                <Text style={styles.goalText}>{name}</Text>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    eachGoal: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fdf0d5',
        borderRadius: 12,
        borderColor: 'transparent',
        width: '100%',
        height: 60,
        justifyContent: 'center',
      },
    goalText:{
        fontSize: 20,
        color: '#360568',
        fontWeight: 'bold',
      }
});
export default GoalItem