import tellMyAppTo from "./tellMyAppTo";

const getAll = () => {
    returellMyAppTo.get("/posts");
};

const get = (id) => {
    return tellMyAppTo.get(`/posts/${id}`);
};

// const getAllComments = (id) => {
//     return tellMyAppTo.get(`/posts/${id}/comments`);
// }

const create = (data) => {
    return tellMyAppTo.post("/posts", data);
};

// const createComment = (id, data) => {
//     return tellMyAppTo.post(`/posts/${id}/comment`, data);
// }

const update = (id, data) => {
    return tellMyAppTo.put(`/posts/${id}`, data);
};

// const updateComment = (id, commentId, data) => {
//     return tellMyAppTo.put(`/posts/${id}/comment/${commentId}`, data);
// }

const remove = (id) => {
    return tellMyAppTo.delete(`/posts/${id}`);
};

// const removeComment = (id, commentId) => {
//     return tellMyAppTo.delete(`/posts/${id}/comment/${commentId}`);
// }

// You can only export default when there's one thing to export
export { getAll, get, getAllComments, create, createComment, update, updateComment, remove, removeComment };