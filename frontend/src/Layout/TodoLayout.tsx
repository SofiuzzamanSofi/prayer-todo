import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import LeftMenu from '../Component/LeftMenu/LeftMenu';
import Task from '../Component/Task/Task';
import style from "./TodoLayout.module.css";
import { TaskContext, } from "../context/TaskProvider"

const TodoLayout: React.FC = () => {

    const taskInfo = useContext(TaskContext);

    return (
        <section className={style.layout_menu}>
            <aside className={style.lef_menu}>
                <LeftMenu />
            </aside>
            <aside className={style.right_main_view_menu}>
                {
                    !taskInfo?.taskList ?
                        ""
                        :
                        <Task taskList={taskInfo?.taskList} />
                }
            </aside>

            <Outlet />
        </section>
    );
};

export default TodoLayout;