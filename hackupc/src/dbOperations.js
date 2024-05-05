import supabase from './supabaseConfig';

// Añadir usuario
async function addUser(user) {
    if (!user.id) {
        console.error('Error: user must include a dni');
        return;
    }

    // Insertar el usuario con password igual al dni directamente
    const { data: newUser, error: insertError } = await supabase
        .from('Users')
        .insert([{ ...user, password: user.id }])
        .single();

    if (insertError) {
        console.error('Error inserting new user:', insertError);
    } else {
        console.log('User created:', newUser);
    }
}

// Eliminar usuario
async function deleteUser(email) {
    const { data, error } = await supabase
        .from('Users')
        .delete()
        .match({ email });

    return { data, error };
}

// Consultar todos los usuarios
async function fetchUsers() {
    const { data, error } = await supabase
        .from('Users')
        .select('*');

    return { data, error };
}

// Consultar Horario Semanal por Email
async function fetchHorariSetmanal(email) {
    const { data, error } = await supabase
        .from('HoresSetmana')
        .select('*')
        .eq('email', email);

    return { data, error };
}

// Exportar las funciones
export {
    addUser,
    deleteUser,
    fetchUsers,
    fetchHorariSetmanal
};


// Ejemplo para usar las funciones en otro fichero:
//
/* import { addUser, deleteUser, fetchUsers, fetchHorariSetmanal } from './dbOperations';

async function manageUsers() {
    // Añadir un nuevo usuario
    const newUser = { id: '12345678A', name: 'Juan', email: 'juan@example.com', phoneNumber: '1234567890' };
    const { data: addedUser, error: addUserError } = await addUser(newUser);
    console.log('Added:', addedUser, 'Error:', addUserError);

    // Eliminar un usuario
    const { data: deletedUser, error: deleteUserError } = await deleteUser('juan@example.com');
    console.log('Deleted:', deletedUser, 'Error:', deleteUserError);

    // Consultar usuarios
    const { data: users, error: fetchUsersError } = await fetchUsers();
    console.log('Users:', users, 'Error:', fetchUsersError);

    // Consultar Horario Semanal
    const { data: schedule, error: scheduleError } = await fetchHorariSetmanal('juan@example.com');
    console.log('Schedule:', schedule, 'Error:', scheduleError);
}

manageUsers();*/
