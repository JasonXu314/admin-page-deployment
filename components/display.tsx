import { Anchor, List, Table } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Display: React.FC = () => {
	const [data, setData] = useState<Application[]>([]);

	useEffect(() => {
		axios
			.get('/api/data')
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<Table.ScrollContainer minWidth={1200}>
				<Table stickyHeader highlightOnHover>
					<Table.Thead>
						<Table.Tr>
							<Table.Th>Name</Table.Th>
							<Table.Th>Email</Table.Th>
							<Table.Th>Age</Table.Th>
							<Table.Th>Phone Number</Table.Th>
							<Table.Th>School</Table.Th>
							<Table.Th>Graduation</Table.Th>
							<Table.Th>Shirt Size</Table.Th>
							<Table.Th>Resume</Table.Th>
							<Table.Th>Dietary Restrictions</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{data.map((application) => (
							<Table.Tr key={application._id.toString()}>
								<Table.Td>
									{application.firstName} {application.lastName}
								</Table.Td>
								<Table.Td>{application.email}</Table.Td>
								<Table.Td>{application.age}</Table.Td>
								<Table.Td>{application.phoneNumber}</Table.Td>
								<Table.Td>{application.school}</Table.Td>
								<Table.Td>
									{application.graduationMonth} {application.graduationYear}
								</Table.Td>
								<Table.Td>{application.shirtSize}</Table.Td>
								<Table.Td>
									{application.resume ? (
										<Anchor href={application.resume} target="_blank" rel="noreferrer noopener">
											View
										</Anchor>
									) : (
										'N/A'
									)}
								</Table.Td>
								<Table.Td>
									<List>
										{application.dietRestrictions.map((restriction, i) => (
											<List.Item key={i}>{restriction}</List.Item>
										))}
									</List>
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</>
	);
};

export default Display;
