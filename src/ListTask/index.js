import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


const ListTask = () => {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('')

    const handleAddtask = () => {
        const taskAdded = [...tasks, { name: task }];
        setTasks(taskAdded);
        setTask('')
    }
    const handleDeleteTask = (name) => {
        const removedTasks = tasks.filter((task) => {
            return name !== task.name;
        });
        setTasks(removedTasks);
    }

    const renderTask = ({ name }) => {
        return (
            <View style={styles.task}>
                <Text style={styles.textTask}>{name}</Text>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => handleDeleteTask(name)}
                >
                    <Icon
                        name='times'
                        size={18}
                        color="red"
                    />
                </TouchableOpacity>

            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    placeholder='Adicione uma tarefa'
                    onChangeText={(value) => setTask(value)}
                    value={task}
                />
                <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={handleAddtask}
                >
                    <Text style={styles.btnText}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                style={styles.scrollList}
            >

                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => renderTask(item)}
                />

            </ScrollView>
        </View>
    )
}


export default ListTask;