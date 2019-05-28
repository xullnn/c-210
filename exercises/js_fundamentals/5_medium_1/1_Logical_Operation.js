(false && undefined); // false
(false || undefined); // false
((false && undefined) || (false || undefined)); // false || false => false
((false || undefined) || (false && undefined)); // false || false => false
((false && undefined) && (false || undefined)); // false && false => false
((false || undefined) && (false && undefined)); // false && false => false
('a' || (false && undefined) || ''); // true || false || false => true
((false && undefined) || 'a' || ''); // false || true || false => true
('a' && (false || undefined) && ''); // true && false && false => false
((false || undefined) && 'a' && ''); // false && true && false => false

// Logical operators are typically used with Boolean (logical) values. When they
// are, they return a Boolean value. However, the && and || operators actually
// return the value of one of the specified operands, so if these operators are
// used with non-Boolean values, they will return a non-Boolean value.

(false && undefined); // false
(false || undefined); // undefined
((false && undefined) || (false || undefined)); // false || undefined => undefined
((false || undefined) || (false && undefined)); // undefined || false => false
((false && undefined) && (false || undefined)); // false && undefined => false
((false || undefined) && (false && undefined)); // undefined && false => undefined
('a' || (false && undefined) || ''); // 'a' || false || '' => 'a'
((false && undefined) || 'a' || ''); // false || 'a' || '' => 'a'
('a' && (false || undefined) && ''); // 'a' && undefined && '' => undefined
((false || undefined) && 'a' && ''); // undefined && 'a' && '' => undefined
