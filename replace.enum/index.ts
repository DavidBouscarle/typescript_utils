const AuthMethod = {
    push: 'PUSH',
    sms: 'SMS',
    phone: 'PHONE',
    voice: 'VOICE',
  };
  
  type AuthMethod = typeof AuthMethod[keyof typeof AuthMethod];
  
  const doThing = (authMethod: AuthMethod): void => {};