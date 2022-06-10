import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import Note from '../components/Note';

import { GET_NOTE, GET_ME } from '../gql/query';
import { EDIT_NOTE } from '../gql/mutation';
import NoteForm from '../components/NoteForm';

const EditNote = props => {
  // store the id found in the url as a variable
  const id = props.match.params.id;

  // query hook, passing the id value as a variable
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  const { data: userdata } = useQuery(GET_ME);
  // define our mutation
  const [editNote] = useMutation(EDIT_NOTE, {
    variables: {
      id
    },
    onCompleted: () => {
      props.history.push(`/note/${id}`);
    }
  });
  // if the data is loading display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!Note note found</p>;

  if (userdata.me.id !== data.note.author.id) {
    return <p>You do note have access to edit this note</p>;
  }

  // if the data is successful, display the data in our UI
  return <NoteForm content={data.note.content} />;
};

export default EditNote;
