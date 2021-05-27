import { Form, Button, InputGroup, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const initialValue = {
    imageUrl: '',
    title: '',
    autor: '',
    price: '0',
}



const ContainerForm = ({id}) => {
    const [validated, setValidated] = useState(false);


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    const [values, setValues] = useState(initialValue);
    const history = useHistory();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/books/${id}`)
            .then((Response) => {
                console.log(Response.data);
                setValues(Response.data);
            })
            

            
        }
    }, []);


    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });

    }


    function onSubmit(ev) {
        ev.preventDefault();
        const method = id  ? 'put' : 'post';
        const url = id 
        ? `http://localhost:5000/books/${id}`
        :  'http://localhost:5000/books'

        axios[method](url, values)
            .then((Response) => {
                history.push('/');
            })
    }

    return (

        <Form noValidate validated={validated} onSubmit={onSubmit}>

            <Form.Group as={Col} md="8" controlId="validationCustom01">
                <Form.Label> URL </Form.Label>
                <Form.Control
                    size="lg"
                    required
                    type="text"
                    placeholder="URL da imagem"
                    name="imageUrl"
                    onChange={onChange}
                    value={values.imageUrl}

                />
                <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Insira o título do livro.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="8" controlId="validationCustom02">
                <Form.Label> Título </Form.Label>
                <Form.Control
                    size="lg"
                    required
                    type="text"
                    placeholder="Título"
                    name="title"
                    onChange={onChange}
                    value={values.title}

                />
                <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Insira o título do livro.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="8" controlId="validationCustom03">
                <Form.Label>Autor</Form.Label>
                <Form.Control
                    size="lg"
                    required
                    type="text"
                    placeholder="Autor"
                    name="autor"
                    onChange={onChange}
                    value={values.autor}



                />
                <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Insira o nome do autor.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Preço</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">R$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Preço"
                        required
                        name="price"
                        onChange={onChange}
                        value={values.price}
                    />

                    <Form.Control.Feedback type="invalid">
                        Insira o preço do livro.
            </Form.Control.Feedback>
                </InputGroup>


            </Form.Group>





            <Form.Group>


            </Form.Group>
            <Button size="lg" type="submit">Criar</Button>

        </Form>


    );
}













export default ContainerForm;