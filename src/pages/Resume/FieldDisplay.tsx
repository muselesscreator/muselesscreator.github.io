import 'react';

import { Field} from './data';

type FieldProps = {
  field: Field,
  classNames?: {
    li?: string,
    text?: string,
  },
};

const FieldDisplay = ({
  field,
  classNames = {},
}: FieldProps) => {
  console.log({ field });
  if (field.type === 'text') {
    return (<p className={classNames.text}>{field.text}</p>);
  }
  if (field.type === 'list') {
    return (
      <p className={classNames.text}>
        {field.title && (<b className={classNames?.text}>{field.title}</b>)}
        <ul>
          {field.items.map((item: Field, index: number) => {
            if (item.type === 'text') {
              return (
                <li key={index} className={classNames.li}>
                  {item.text}
                </li>
              );
            }
            else {
              return (<FieldDisplay field={item} classNames={classNames} />);
            }
          })}
        </ul>
      </p>
    );
  }
}

export default FieldDisplay;
