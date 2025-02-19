import { Tabs } from "expo-router"

const PsikologLayout = () => {
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name="index" />
        </Tabs>
    )
}

export default PsikologLayout;