import { resolve } from 'path/win32'
import { getAllTasks } from '../../controllers/taskController'
import {getMockReq, getMockRes } from '@jest-mock/express'

describe('getAllTasks', () => {
    test('should send all tasks via res', () => {
        // Arrage
        const reqMock = getMockReq()
        const { res } = getMockRes()

        // Act
        getAllTasks(reqMock, res)

        // Assert
        expect(res.send).toBeCalledTimes(1)
    })
})

/* describe('getOneTasks', () => {
    test('should send 404 if not exists', () => {
        // Arrage
        const reqMock = getMockReq({param: { id: "22" } as any})
        const { res } = getMockRes()
        res.status(404)
        // resThrowError(res)
        // Act
        getAllTasks(reqMock, res)

        // Assert
        expect(res.status).toHaveBeenCalledWith(404)
        // expect(res.statusCode).toBe(404)
        // expect(res.statusCode).toBe(0)
        // expect(res.statusCode).toEqual(0)
    })
}) */

/* function resThrowError(r1: any){
    r1.sendStatus(404)
    return r1
} */