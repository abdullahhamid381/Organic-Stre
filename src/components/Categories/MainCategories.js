import React, { useEffect } from "react";
import CreateCategory from "./CreateCategory";
import CategoriesTable from "./CategoriesTable";
import { useDispatch } from "react-redux"
import { listCategories } from "../../Redux/actions/categoryActions";
const MainCategories = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listCategories());
    }, [])

    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title"> Categories </h2>{" "}
            </div>
            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="row">
                        {" "}
                        {/* Create category */} <CreateCategory /> {/* Categories table */}{" "}
                        <CategoriesTable />
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </section>
    );
};

export default MainCategories;
