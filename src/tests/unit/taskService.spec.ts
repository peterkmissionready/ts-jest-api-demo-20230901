import { createTask, getAllTasks, getOneTask } from '../../services/taskService';

describe('getAllTasks', () => {
    test('getAllTasks should return a default Task', () => {
        // Arrange
        const expected = [
            {
                id: 1,
                name: 'Mission 01',
                description: 'Chatbot',
                isCompleted: false,
            },
        ];

        // Act
        const actual = getAllTasks();

        // Assert
        expect(actual).toEqual(expected);
    })

})
// tasks api to allow create a task

// tasks api to return a task by its id

describe('createTask', () => {
    test('Should create a task', () => {
        // Arrange
        const input = {
            name: 'Mission 02',
            description: 'NLP'
        }
        const expected= {
            id: 2,
            name: 'Mission 02',
            description: 'NLP',
            isCompleted: false,
        }

        // Act
        const actual = createTask(input);

        // Assert
        expect(actual).toEqual(expected);
    });
});

describe('getOneTask', () => {
    test('should return a task by id', () => {
        // Arrange
        const input=2;
        const expected = {
            id: 2,
            name: 'Mission 02',
            description: 'NLP',
            isCompleted: false,
        }

        // Act
        const actual = getOneTask(input);

        // Assert
        expect(actual).toEqual(expected);
    })

})
