import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const Resume = () => {
  return (
    <section className="min-h-screen snap-start flex justify-center">
      <Card className="xl:max-w-8/12 lg:max-w-10/12 sm:max-w-11/12">
        <CardHeader>
          <CardTitle>
            <div className="flex">
              <div className="flex-1/2">
                <h2 className="inline-block text-2xl">Jennifer Fix</h2>
                <small className="inline-block text-xs pl-1">R.S.E.</small>
              </div>
              <div className="flex-1/2 justify-items-end">
                <p>Calgary, AB</p>
              </div>
            </div>
          </CardTitle>
          <CardDescription hidden>
            This is a resume for Jennifer Fix
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div id="work-history" className="space-y-4">
            <div className="border-b-2">
              <h3 className="text-xl">Work History</h3>
            </div>
            <div className="space-y-2">
              <em>July 2023 - Present</em>
              <p>
                <strong>Maintenance Technician III</strong> –{' '}
                <em>JLL Canada | Amazon Account</em>
              </p>
              <ul className="pl-6 list-disc">
                <li>Supervise and train junior technicians</li>
                <li>Ensure all tasks are completed safely and accurately</li>
                <li>Became a Qualified Electrical Evaluator</li>
                <li>
                  Built app to help identify jam locations on Singulator
                  significantly improving operations response time and overall
                  throughput
                </li>
              </ul>
              <div className="space-y-2">
                <em>2021 – May 2022</em>
                <p>
                  <strong>Maintenance Technician II</strong> –{' '}
                  <em>JLL Canada | Amazon Account</em>
                </p>
                <ul className="pl-6 list-disc">
                  <li>
                    Comply with and promote a strong safety focused workplace
                  </li>
                  <li>
                    Maintain, troubleshoot, repair material handling equipment
                  </li>
                  <li>Maintain, troubleshoot, repair building systems</li>
                  <li>
                    Work with a computerized maintenance system for all work
                    orders
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <em>2012 – 2021</em>
                <p>
                  <strong>Commercial/Maintenance Electrician</strong> –{' '}
                  <em>Sable Electrical Services</em>
                </p>
                <ul className="pl-6 list-disc">
                  <li>
                    Install, maintain, repair building electrical systems
                    including running conduit, wire, install lighting, panels,
                    transformers, control systems
                  </li>
                  <li>
                    Install, maintain/test and repair fire alarm devices, panels
                    and wiring, interlock doors and security systems.
                  </li>
                  <li>
                    Install controls for HVAC systems, exhaust fans, pumps.
                  </li>
                  <li>
                    Troubleshoot and repair various electrical equipment in
                    various locations
                  </li>
                  <li>
                    Supervise and mentor apprentices, read and interpret
                    blueprints and wiring diagrams
                  </li>
                  <li>
                    Make sure all work is done to electrical and building codes
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <em>2009 – 2012</em>
                <p>
                  <strong>Commercial/Residential Painter</strong>
                </p>
                <ul className="pl-6 list-disc">
                  <li>Painting, and renovation</li>
                </ul>
              </div>
              <div className="space-y-2">
                <em>2002 – 2009</em>
                <p>
                  <strong>Electric Wireline Supervisor</strong>
                </p>
                <ul className="pl-6 list-disc">
                  <li>Supervise crews in the shop and field</li>
                  <li>Operate and maintain equipment</li>
                  <li>Troubleshoot and repair problems with minimal support</li>
                  <li>Ensure proper billing of customerse</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="education" className="space-y-8">
            <div className="border-b-2">
              <h3 className="text-xl">Education</h3>
            </div>
            <div className="">
              <table className="">
                <tbody>
                  <tr>
                    <td>Journeyperson Electrician, Red Seal Endorsed</td>
                    <td>Red Deer Polytechnic</td>
                    <td>2019</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default Resume
