import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const RadioGroupComponent = () => {

    const [selectedPlan, setSelectedPlan] = useState(plans[0])

    return (
        <>
            <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
                <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                <div className="space-y-2">
                    {plans.map((plan) => (
                        <RadioGroup.Option
                            key={plan.name}
                            value={plan}
                            className={({ active, checked }) =>
                                `${active
                                    ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                    : ''
                                }
                ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                                }
                  relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                            }
                        >
                            {({ active, checked }) => (
                                <>
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="text-sm">
                                                <RadioGroup.Label
                                                    as="p"
                                                    className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
                                                        }`}
                                                >
                                                    {plan.name}
                                                </RadioGroup.Label>
                                                <RadioGroup.Description
                                                    as="span"
                                                    className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'
                                                        }`}
                                                >
                                                    <span>
                                                        {plan.ram}/{plan.cpus}
                                                    </span>{' '}
                                                    <span aria-hidden="true">&middot;</span>{' '}
                                                    <span>{plan.disk}</span>
                                                </RadioGroup.Description>
                                            </div>
                                        </div>
                                        {checked && (
                                            <div className="shrink-0 text-white">
                                                <CheckIcon className="h-6 w-6" />
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </>
    )
}

export default RadioGroupComponent



