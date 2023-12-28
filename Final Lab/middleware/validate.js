export const validateTask = (req, res, next) => {
    const { title, description, dueDate, status } = req.body;

    const errors = [];

    if (!title || title.trim() === '') {
        errors.push('Title is required.');
    }

    if (!description || description.trim() === '') {
        errors.push('Description is required.');
    }

    if (!dueDate || dueDate.trim() === '') {
        errors.push('Due date is required.');
    }

    if (!status || status.trim() === '') {
        errors.push('Status is required.');
    }

    if (errors.length > 0) {
        res.locals.errors = errors;
        return res.status(422).send('Validation errors. Please check your input.');
    }

    next();
};
