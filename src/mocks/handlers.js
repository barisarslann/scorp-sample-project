import { rest } from 'msw'

export const handlers = [
  rest.post('/form', (req, res, ctx) => {
    const formData = req.body

    return res(
        ctx.status(200),
        ctx.json({
            status: true,
            data: formData
        })
    )
  })
]