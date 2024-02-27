import React from 'react'

export const ListContainer = ({students}) => {
  return (
        <div className="list-group">
            {
                students.map((student, i) => {
                    return (
                        <a href="#" className="list-group-item list-group-item-action">{student.name}</a>
                    )
                })
            }
        </div>
  )
}
