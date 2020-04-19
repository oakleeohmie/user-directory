import React from 'react';
import { MDBDataTable } from 'mdbreact';

const Directory = () => {
    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 170
            },
            {
                label: 'Language',
                field: 'language',
                sort: 'asc',
                width: 170
            },
            {
                label: 'Phone',
                field: 'phone',
                sort: 'asc',
                width: 170
            }
        ],
        rows: [
            {
                name: 'Bruce Banner',
                language: 'JavaScript',
                phone: '000-000-0000'
            },
            {
                name: 'Natasha Romanoff',
                language: 'MongoDB',
                phone: '000-000-0000'
            },
            {
                name: 'Stephen Strange',
                language: 'NodeJS',
                phone: '000-000-0000'
            },
            {
                name: 'Tony Stark',
                language: 'React',
                phone: '000-000-0000'

            },
            {
                name: 'Scott Lang',
                language: 'CSS',
                phone: '000-000-0000'

            },
            {
                name: 'Steve Rogers',
                language: 'HTML',
                phone: '000-000-0000'

            },
            {
                name: 'Clint Barton',
                language: 'JavaScript',
                phone: '000-000-0000'
            },
            {
                name: 'Bruce Banner',
                language: 'JavaScript',
                phone: '000-000-0000'
            },
            {
                name: 'Natasha Romanoff',
                language: 'MongoDB',
                phone: '000-000-0000'
            },
            {
                name: 'Stephen Strange',
                language: 'NodeJS',
                phone: '000-000-0000'
            },
            {
                name: 'Tony Stark',
                language: 'React',
                phone: '000-000-0000'

            },
            {
                name: 'Scott Lang',
                language: 'CSS',
                phone: '000-000-0000'

            },
            {
                name: 'Steve Rogers',
                language: 'HTML',
                phone: '000-000-0000'

            },
            {
                name: 'Clint Barton',
                language: 'JavaScript',
                phone: '000-000-0000'
            },
            {
                name: 'Bruce Banner',
                language: 'JavaScript',
                phone: '000-000-0000'
            },
            {
                name: 'Natasha Romanoff',
                language: 'MongoDB',
                phone: '000-000-0000'
            },
            {
                name: 'Stephen Strange',
                language: 'NodeJS',
                phone: '000-000-0000'
            },
            {
                name: 'Tony Stark',
                language: 'React',
                phone: '000-000-0000'

            },
            {
                name: 'Scott Lang',
                language: 'CSS',
                phone: '000-000-0000'

            },
            {
                name: 'Steve Rogers',
                language: 'HTML',
                phone: '000-000-0000'

            },
            {
                name: 'Clint Barton',
                language: 'JavaScript',
                phone: '000-000-0000'
            }

        ]
    };

    return (
        <MDBDataTable
            striped
            bordered
            small
            data={data}
        />
    );
}

export default Directory;