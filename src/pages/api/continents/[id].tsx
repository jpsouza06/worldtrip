import { NextApiResponse, NextApiRequest } from "next";
import { continents } from '../../../../data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req
  const { id } = query
  const filtered = continents.filter((c) => c.id === id)

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}

